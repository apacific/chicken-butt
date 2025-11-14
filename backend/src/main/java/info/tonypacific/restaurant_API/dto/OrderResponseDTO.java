package info.tonypacific.restaurant_API.dto;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.List;

public record OrderResponseDTO(
        Long id,
        String orderType,
        String status,
        OffsetDateTime createdAt,
        List<OrderLineDTO> lines,
        BigDecimal total
) {}
