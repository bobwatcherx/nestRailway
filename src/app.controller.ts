import { Controller, Get,Post,Delete,Body,Param} from '@nestjs/common';
import { AppService } from './app.service';
import {userDTO} from './DTO/user.dto';

@Controller()
export class AppController {
 constructor(private appservice:AppService){}

 @Get()
 finddata(){
 	return this.appservice.findall()
 }
 @Get(":id")
 findone(@Param() id:number){
 	console.log(id)
 	return this.appservice.findOne(id)
 }
 @Delete("/delete/:id")
 hapus(@Param() id:number){
 	return this.appservice.hapus(id)
 }
 @Post("/post")
 createpost(@Body() createuser:userDTO){
 	console.log(createuser)
 	return this.appservice.create(createuser)
 }
}
