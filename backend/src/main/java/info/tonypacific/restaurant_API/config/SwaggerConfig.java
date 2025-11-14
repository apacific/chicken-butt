package info.tonypacific.restaurant_API.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI restaurantOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Restaurant Order Management API")
                        .description("API for managing menu items and customer orders")
                        .version("v1.0.0"));
    }
}
