import { Injectable, Inject } from '@nestjs/common';
import {Project} from './projects.entity';
import {ProjectDto} from './dto/project.dto';
import {Employee} from '../employees/employee.entity';
import {PROJECT_REPOSITORY} from '../../core/constants'

@Injectable()
export class ProjectsService {
  constructor(@Inject(PROJECT_REPOSITORY) private readonly projectRepository: typeof Project) {  }

  async create(project: ProjectDto, employeeId): Promise<Project> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this. projectRepository.create<Project>({...project, employeeId})
  }

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.findAll<Project>({
      include:[{model: Employee, attributes: {exclude: ['password']}}]
    });
  }

  async findOne(id): Promise<Project> {
    return await this.projectRepository.findOne({
      where: { id },
      include: [{model: Employee, attributes: {exclude: ['password']}}]
    })
  }

  async delete(id, employeeId) {
    return await this.projectRepository.destroy({ where: { id, employeeId } });
  }

  async update(title, id, employeeId) {
    console.log("HERE IS TITLE", title);
    console.log("HERE IS ID", id);
    console.log("HERE IS EMPLOYEEID", employeeId);
    const [numberOfAffectedRows, [updatedProject]] = await this.projectRepository.update({title: title}, { where: { id, employeeId }, returning: true });

    return { numberOfAffectedRows, updatedProject };
  }
}
