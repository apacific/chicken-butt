package info.tonypacific.restaurant_API.controller;

import info.tonypacific.restaurant_API.dto.MenuItemDTO;
import info.tonypacific.restaurant_API.mapper.MenuItemMapper;
import info.tonypacific.restaurant_API.repository.MenuRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/menu")
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {

    private final MenuRepository menuRepository;

    public MenuController(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    @GetMapping
    public List<MenuItemDTO> all() {
        return menuRepository.findAll().stream()
                .map(MenuItemMapper::toDTO)
                .toList();
    }
}
