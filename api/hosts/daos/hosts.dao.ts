import shortid from 'shortid';
import debug from 'debug';
import { mongooseService } from '../../common/services/mongoose.service';
import { CreateHostDto } from '../dto/create.host.dto';
import { PatchHostDto } from '../dto/patch.host.dto';
import { PutHostDto } from '../dto/put.host.dto';

const log: debug.IDebugger = debug('app:hosts-dao');

class HostsDao {
  Schema = mongooseService.getMongoose().Schema;

  hostSchema = new this.Schema(
    {
      _id: String,
      hostname: String,
      world: String,
      difficulty: String,
    },
    { id: false }
  );

  Host = mongooseService.getMongoose().model('Hosts', this.hostSchema);

  constructor() {
    log('Created new instance of HostsDao');
  }

  async addHost(hostFields: CreateHostDto) {
    const hostId = shortid.generate();
    const host = new this.Host({
      _id: hostId,
      ...hostFields,
    });
    await host.save();
    return hostId;
  }

  async getHostByHostName(hostname: string) {
    return this.Host.findOne({ hostname }).exec();
  }

  async removeHostById(hostId: string) {
    return this.Host.deleteOne({ _id: hostId }).exec();
  }

  async getHostById(hostId: string) {
    return this.Host.findOne({ _id: hostId }).populate('Host').exec();
  }

  async getHosts(limit = 25, page = 0) {
    return this.Host.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }

  async updateHostById(hostId: string, hostFields: PatchHostDto | PutHostDto) {
    const existingHost = await this.Host.findOneAndUpdate(
      { _id: hostId },
      { $set: hostFields },
      { new: true }
    ).exec();

    return existingHost;
  }
}

export const hostsDao = new HostsDao();
