package info.tonypacific.restaurant_API.mapper;

import info.tonypacific.restaurant_API.dto.MenuItemDTO;
import info.tonypacific.restaurant_API.model.MenuItem;

public class MenuItemMapper {
    public static MenuItemDTO toDTO(MenuItem m) {
        return new MenuItemDTO(
                m.getId(),
                m.getSection().name().toLowerCase(),
                m.getSubsection(),
                m.getName(),
                m.getDescription(),
                m.getPrice(),
                m.getImagePath()
        );
    }
}
