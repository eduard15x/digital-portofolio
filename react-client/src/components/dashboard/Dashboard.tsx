import { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoOpenOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

export interface Project {
    id: number;
    projectName: string;
    projectDescription: string;
    projectLink: string;
    projectPosition: number;
    projectImageLink: string;
}

interface NewProject {
    projectName: string;
    projectDescription: string;
    projectLink: string;
    projectPosition: number;
    projectImageLink: string;
}

type GenericStateType = NewProject;

export const Dashboard: React.FC = () => {
    const defaultProjectValue: NewProject = {
        projectName: '',
        projectDescription: '',
        projectLink: '',
        projectPosition: 0,
        projectImageLink: '',
    }

    const [inputKey, setInputKey] = useState(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [projectList, setProjectList] = useState<Project[]>([]);
    const [newProject, setNewProject] = useState<NewProject>(defaultProjectValue);
    const [updatedProject, setUpdatedProject] = useState<NewProject>(defaultProjectValue);
    const [projectId, setProjectId] = useState<number>(0);
    const [file, setFile] = useState<File | null>(null);

    // CRUD OPERATIONS
    const getAllProjects = async () => {
        try {
            const response  = await fetch('http://localhost:3000/project/list', {
                method: 'GET',
            })

            if (response.status >= 200 && response.status < 300) {
                const json = await response.json();
                setProjectList(json);
            } else {
                setProjectList([]);
                console.error(response);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const createNewProject = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!file) {
            alert('Please select a file for your new project.');
            return;
        }

        try {
            setIsLoading(true);

            const responseUploadImage = await handleImageUpload();
            if (responseUploadImage.failedImageUpload !== null && responseUploadImage.failedImageUpload === true) {
                throw new Error("Error uploading image.");
            }

            newProject.projectImageLink = responseUploadImage.secure_url;
            const response = await fetch('http://localhost:3000/project', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newProject)
            })

            if (response.status >= 200 && response.status < 300) {
                setNewProject(defaultProjectValue);
                setInputKey(inputKey + 1);
            } else {
                console.error(response.statusText);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
            getAllProjects();
        }
    }

    const updateCurrentProject =async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const response = await fetch('http://localhost:3000/project/' + projectId, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updatedProject)
            })

            if (response.status >= 200 && response.status < 300) {
                console.log('Project was updated');
                closeModal();
            } else {
                console.error(response.statusText);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
            getAllProjects();
        }
    }

    const deleteProject = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const projectId = e.currentTarget.dataset.projectId;
        try {
            setIsLoading(true);
            await fetch('http://localhost:3000/project/' + projectId, {
                method: 'DELETE',
            });

        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false);
            getAllProjects();
        }
    }

    const updateFormFields = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
        state: GenericStateType,
        setState: React.Dispatch<React.SetStateAction<GenericStateType>>,
        key: string
    ) => {
        if (e.target.type === 'number') {
            setState({...state!, [key]: Number(e.target.value)});
        } else {
            setState({...state!, [key]: e.target.value});
        }
    };

    const handleImageUpload = async () => {
        try {
            if (!file) {
                alert('Please select a file for your project.');
                return;
            }

            const formData = new FormData();
            formData.append('image', file);

            const response = await fetch('http://localhost:3000/images/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                console.error('Failed to upload image:', response.statusText);
                return { failedImageUpload: true};
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            return { failedImageUpload: true};
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {

            const selectedFile = e.target.files[0];
            if (!selectedFile.type.startsWith('image/jpeg')) {
                alert('Please select a valid .jpg file.');
                return;
            }

            setFile(selectedFile);
            console.log(e.target.files);
        }
    };

    const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowModal(true);
        const selectedProjectId = Number(e.currentTarget.dataset.projectId);
        setProjectId(selectedProjectId);
        const selectedProjectData = projectList.find(proj => proj.id == selectedProjectId);

        if (selectedProjectData) {
            setUpdatedProject({
              projectName: selectedProjectData.projectName,
              projectDescription: selectedProjectData.projectDescription,
              projectLink: selectedProjectData.projectLink,
              projectPosition: selectedProjectData.projectPosition,
              projectImageLink: selectedProjectData.projectImageLink
            });
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }

    useEffect(() => {
        getAllProjects();
    }, [])

    return (
        <div className="dashboard">
            <div className="dashboard__projects">
                <h2>Project list</h2>

                <div className="list">
                    {
                        projectList?.length > 0
                        ? projectList
                            .sort((a, b) => a.projectPosition - b.projectPosition)
                            .map((item) => (
                            <div key={item.id} className="item">
                                <img src={item.projectImageLink} alt="Project image" className="proj-img" />
                                <div className="proj-data">
                                    <p className="name">{ item.projectName }</p>
                                    <p className="description">{ item.projectDescription }</p>
                                </div>
                                <div className="proj-controls">
                                    <button disabled={isLoading} className="update" data-project-id={item.id} onClick={openModal} title="Update">
                                        <CiEdit />
                                    </button>
                                    <button disabled={isLoading} className="delete" data-project-id={item.id} onClick={deleteProject} title="Delete">
                                        <RiDeleteBin6Line />
                                    </button>
                                    <button className="navigate" title="navigate">
                                        <Link to={item.projectLink} target="_blank">
                                            <IoOpenOutline />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        ))
                        : 'No projects available. Please create a new project do be displayed in the list.'
                    }
                </div>
            </div>

            <form className="dashboard__add-form" onSubmit={createNewProject}>
                <h2>Create new project</h2>
                <input
                    required
                    value={newProject!.projectName}
                    name="projectName"
                    id="projectName"
                    placeholder="Project Name"
                    type="text"
                    onChange={(e) => updateFormFields(e, newProject, setNewProject, 'projectName')}
                />
                <input
                    required
                    value={newProject!.projectLink}
                    name="projectLink"
                    id="projectLink"
                    placeholder="Project URL"
                    type="text"
                    onChange={(e) => updateFormFields(e, newProject, setNewProject, 'projectLink')}
                />
                <input
                    required
                    className="half"
                    name="projectImage"
                    id="projectImage"
                    placeholder="Project Image"
                    type="file"
                    accept=".jpg"
                    onChange={handleFileChange}
                    key={inputKey}
                />
                <input
                    required
                    className="half"
                    value={newProject!.projectPosition}
                    name="projectPosition"
                    id="projectPosition"
                    placeholder="Project List Position"
                    type="number"
                    onChange={(e) => updateFormFields(e, newProject, setNewProject, 'projectPosition')}
                />

                <textarea
                    required
                    value={newProject!.projectDescription}
                    name="projectDescription"
                    id="projectDescription"
                    placeholder="Write a description about the project."
                    cols={30}
                    rows={10}
                    maxLength={300}
                    onChange={(e) => updateFormFields(e, newProject, setNewProject, 'projectDescription')}
                >
                </textarea>

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`btn ${isLoading ? 'btn-disabled' : ''}`}
                >
                    Submit
                </button>
            </form>

            <div className={`dashboard__modal ${showModal ? '' : 'modal-hide'}`} onClick={closeModal}>
                <form className="update-form" data-current-project-id={projectId} onClick={(e) => e.stopPropagation()} onSubmit={updateCurrentProject}>
                    <div className="close" onClick={closeModal}>
                        <GrClose />
                    </div>
                    <h3>Update Project</h3>

                <input
                    defaultValue={updatedProject.projectName}
                    required
                    name="projectName"
                    id="projectName"
                    placeholder="Project Name"
                    type="text"
                    onChange={(e) => updateFormFields(e, updatedProject, setUpdatedProject, 'projectName')}
                />
                <input
                    defaultValue={updatedProject.projectLink}
                    required
                    name="projectLink"
                    id="projectLink"
                    placeholder="Project URL"
                    type="text"
                    onChange={(e) => updateFormFields(e, updatedProject, setUpdatedProject, 'projectLink')}
                />
                <input
                    value={updatedProject.projectPosition}
                    required
                    className="half"
                    name="projectPosition"
                    id="projectPosition"
                    placeholder="Project List Position"
                    type="number"
                    onChange={(e) => updateFormFields(e, updatedProject, setUpdatedProject, 'projectPosition')}
                />

                <input
                    required
                    className="half"
                    name="projectImage"
                    id="projectImage"
                    placeholder="Project Image"
                    type="file"
                    accept=".jpg"
                    onChange={handleFileChange}
                    key={inputKey}
                />

                <textarea
                    defaultValue={updatedProject.projectDescription}
                    required
                    name="projectDescription"
                    id="projectDescription"
                    placeholder="Write a description about the project."
                    cols={30}
                    rows={10}
                    maxLength={300}
                    onChange={(e) => updateFormFields(e, updatedProject, setUpdatedProject, 'projectDescription')}
                >
                </textarea>

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`btn ${isLoading ? 'btn-disabled' : ''}`}
                >
                    Update
                </button>
                </form>
            </div>

        </div>
    );
}