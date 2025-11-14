package info.tonypacific.restaurant_API.controller;

import info.tonypacific.restaurant_API.dto.MenuItemDTO;
import info.tonypacific.restaurant_API.mapper.MenuItemMapper;
import info.tonypacific.restaurant_API.model.MenuItem;
import info.tonypacific.restaurant_API.model.Section;
import info.tonypacific.restaurant_API.repository.MenuRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(MenuController.class)
public class MenuControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MenuRepository menuRepository;

    private MenuItem chickenItem;
    private MenuItem colaItem;

    @BeforeEach
    public void setUp() {
        chickenItem = new MenuItem(
            1L,
            Section.FOOD,
            "chicken",
            "Whole Chicken",
            "Whole chicken, southern-fried.",
            new BigDecimal("18.00"),
            "/images/whole-chicken.webp"
        );

        colaItem = new MenuItem(
            2L,
            Section.BEVERAGES,
            "soft drinks",
            "Cola",
            "Ice cold, with or without ice.",
            new BigDecimal("2.50"),
            "/images/cola.webp"
        );
    }

    @Test
    public void testGetAllMenuItems_ShouldReturn200WithMenuItems() throws Exception {
        List<MenuItem> mockItems = Arrays.asList(chickenItem, colaItem);
        when(menuRepository.findAll()).thenReturn(mockItems);

        mockMvc.perform(get("/menu"))
            .andExpect(status().isOk())
            .andExpect(content().contentType("application/json"))
            .andExpect(jsonPath("$", hasSize(2)))
            .andExpect(jsonPath("$[0].id", is(1)))
            .andExpect(jsonPath("$[0].name", is("Whole Chicken")))
            .andExpect(jsonPath("$[0].section", is("FOOD")))
            .andExpect(jsonPath("$[0].subsection", is("chicken")))
            .andExpect(jsonPath("$[0].price", is(18.00)))
            .andExpect(jsonPath("$[1].id", is(2)))
            .andExpect(jsonPath("$[1].name", is("Cola")))
            .andExpect(jsonPath("$[1].section", is("BEVERAGES")))
            .andExpect(jsonPath("$[1].subsection", is("soft drinks")))
            .andExpect(jsonPath("$[1].price", is(2.50)));
    }

    @Test
    public void testGetAllMenuItems_ShouldReturnEmptyListWhenNoItems() throws Exception {
        List<MenuItem> emptyList = Arrays.asList();
        when(menuRepository.findAll()).thenReturn(emptyList);

        mockMvc.perform(get("/menu"))
            .andExpect(status().isOk())
            .andExpect(content().contentType("application/json"))
            .andExpect(jsonPath("$", hasSize(0)));
    }

    @Test
    public void testGetAllMenuItems_ShouldMapEntitiesToDTOs() throws Exception {
        List<MenuItem> mockItems = Arrays.asList(chickenItem);
        when(menuRepository.findAll()).thenReturn(mockItems);

        mockMvc.perform(get("/menu"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$[0]", hasKey("id")))
            .andExpect(jsonPath("$[0]", hasKey("name")))
            .andExpect(jsonPath("$[0]", hasKey("section")))
            .andExpect(jsonPath("$[0]", hasKey("subsection")))
            .andExpect(jsonPath("$[0]", hasKey("price")))
            .andExpect(jsonPath("$[0]", hasKey("imagePath")));
    }

    @Test
    public void testGetAllMenuItems_ShouldIncludeDescription() throws Exception {
        List<MenuItem> mockItems = Arrays.asList(chickenItem);
        when(menuRepository.findAll()).thenReturn(mockItems);

        mockMvc.perform(get("/menu"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$[0].description", is("Whole chicken, southern-fried.")));
    }
}
