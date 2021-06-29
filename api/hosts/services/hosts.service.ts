import { hostsDao } from '../daos/hosts.dao';
import { CRUD } from '../../common/interfaces/crud.interface';
import { CreateHostDto } from '../dto/create.host.dto';
import { PutHostDto } from '../dto/put.host.dto';
import { PatchHostDto } from '../dto/patch.host.dto';

class HostsService implements CRUD {
  async create(resource: CreateHostDto) {
    return hostsDao.addHost(resource);
  }

  async deleteById(id: string) {
    return hostsDao.removeHostById(id);
  }

  async list(limit: number, page: number) {
    return hostsDao.getHosts(limit, page);
  }

  async patchById(id: string, resource: PatchHostDto): Promise<any> {
    return hostsDao.updateHostById(id, resource);
  }

  async putById(id: string, resource: PutHostDto): Promise<any> {
    return hostsDao.updateHostById(id, resource);
  }

  async readById(id: string) {
    return hostsDao.getHostById(id);
  }

  async getHostByHostName(hostname: string) {
    return hostsDao.getHostByHostName(hostname);
  }
}

export const hostService = new HostsService();
