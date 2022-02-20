import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findall(){
    return this.usersRepository.find()
  }
  create(createuser:any){
    return this.usersRepository.save(createuser)
  }
  findOne(id:number){
    return this.usersRepository.findOne(id)
  }
  hapus(id:number){
    return this.usersRepository.delete(id)
  }
}
