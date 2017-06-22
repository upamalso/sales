package com.nw.provincialcouncil;

import javax.ws.rs.Produces;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("")
public class WebResources {
	
	@RequestMapping(value="")
	public String index(){
		System.out.println("Login page is Loadings ");
		return "index.html";		
	}
	
	@RequestMapping(value="home")
	public String home(){
		System.out.println("Home page is Loading ");		
		return "homepage.html";		
	}
	
	@RequestMapping(value="test")
	public String userCreate(){
		System.out.println("Home page is Loading ");		
		return "testpage.html";		
	}
	

	@RequestMapping(value="/authenticate", method = RequestMethod.POST)
	@ResponseBody
	@Produces(MediaType.TEXT_PLAIN_VALUE)
	public String auth(){		
		System.out.println("User trying to authenticate");		
		return "OK";	    
	}
	
	@RequestMapping(value = "/account/login", method = RequestMethod.POST, params = {"username","password"})
	public String login(@RequestParam(value = "username") String username, 
	        @RequestParam(value = "password") String password) {

		System.out.println(username);
		System.out.println(password);
	    // do authentication
		return "redirect:home.html";
	    //return "home.html";
	}
}
