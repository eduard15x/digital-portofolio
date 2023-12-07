import { IsString, IsInt, IsNotEmpty, MinLength } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @MinLength(3, { message: 'Project name must have atleast 3 characters.' })
  @IsNotEmpty()
  projectName: string;

  @IsString()
  @MinLength(3, { message: 'Project description have atleast 3 characters.' })
  @IsNotEmpty()
  projectDescription: string;

  @IsString()
  @MinLength(3, { message: 'Project link must have atleast 3 characters.' })
  @IsNotEmpty()
  projectLink: string;

  @IsInt()
  @IsNotEmpty()
  projectPosition: number;

  @IsString()
  @MinLength(3, { message: 'Project image link must be provide.' })
  @IsNotEmpty()
  projectImageLink: string;
}
