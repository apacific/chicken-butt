package info.tonypacific.restaurant_API.dto;

import java.math.BigDecimal;

public record MenuItemDTO(
        Long id,
        String section,
        String subsection,
        String name,
        String description,
        BigDecimal price,
        String imagePath
) {}
