package com.nw.provincialcouncil;

import java.util.HashMap;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/api")
public class WebRestController {

	@RequestMapping(value="/", method = RequestMethod.POST)
	public void login(){
		System.out.println("Calling the api");
	}
	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public void getItems(){
		System.out.println("Calling the api");
	}
	
	@RequestMapping(value="/neworder", method = RequestMethod.POST)
	public void createOrder(@RequestBody HashMap<String,Object> map){
		System.out.println("Calling the api create order");
		System.out.println(map);
	}
	
/*	@RequestMapping(value="/login",method = RequestMethod.POST, consumes = {"application/x-www-form-urlencoded"})	
	public void requestLogin(HttpServletRequest request){
		
		//System.out.println(request.getHeaderNames().nextElement());	
		while(request.getHeaderNames().hasMoreElements()){
			System.out.println(request.getHeaderNames().nextElement());
		}
	}
	

	@RequestMapping(value="/login2",method = RequestMethod.POST)	
	public Map<String, Object> requestLogin2(@RequestBody Map <String, Object> map){
		
		System.out.println(map);
		return map;

	}
*/
}
