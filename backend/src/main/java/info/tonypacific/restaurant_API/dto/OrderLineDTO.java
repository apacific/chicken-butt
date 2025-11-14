package info.tonypacific.restaurant_API.dto;

import java.math.BigDecimal;

public record OrderLineDTO(
        Long menuItemId,
        String name,
        Integer quantity,
        String note,
        BigDecimal unitPrice,
        BigDecimal lineTotal
) {}
