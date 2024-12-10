package com.kln.FuelBackend.middleware.filter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CustomFilterConfig {

    @Bean
    public FilterRegistrationBean<CustomFilter> customFilter(){
        FilterRegistrationBean<CustomFilter> filter = new FilterRegistrationBean<>();
        filter.setFilter(new CustomFilter());
        filter.addUrlPatterns("/api/v1/");
        return filter;
    }

}
