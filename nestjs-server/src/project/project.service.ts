import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    const project: Project = new Project();

    project.projectName = createProjectDto.projectName;
    project.projectDescription = createProjectDto.projectDescription;
    project.projectLink = createProjectDto.projectLink;
    project.projectPosition = createProjectDto.projectPosition;
    project.projectImageLink = createProjectDto.projectImageLink;

    await this.projectRepository.save(project);

    return project;
  }

  async findAllProjects(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async findSingleProject(id: number): Promise<Project> {
    return await this.projectRepository.findOneBy({ id });
  }

  async updateProject(
    id: number,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project | { message: string }> {
    const existingProject = await this.projectRepository.findOneBy({ id });

    if (existingProject == null) {
      return { message: `Project with id '${id}' was not found` };
    }

    const project: Project = new Project();

    project.projectName = updateProjectDto.projectName;
    project.projectDescription = updateProjectDto.projectDescription;
    project.projectLink = updateProjectDto.projectLink;
    project.projectPosition = updateProjectDto.projectPosition;
    project.projectImageLink = updateProjectDto.projectImageLink;
    project.id = id;

    await this.projectRepository.save(project);

    return project;
  }

  async removeProject(id: number): Promise<{ message: string }> {
    const project = await this.projectRepository.findOneBy({ id });

    if (project == null) {
      return { message: `Project with id '${id}' was not found` };
    }

    await this.projectRepository.delete(id);
    return { message: `Project with id '${id}' was deleted.` };
  }
}
