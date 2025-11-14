package info.tonypacific.restaurant_API.mapper;

import info.tonypacific.restaurant_API.dto.OrderLineDTO;
import info.tonypacific.restaurant_API.dto.OrderResponseDTO;
import info.tonypacific.restaurant_API.model.Order;
import info.tonypacific.restaurant_API.model.OrderLine;

import java.math.BigDecimal;
import java.util.List;

public class OrderMapper {
    public static OrderResponseDTO toDTO(Order order) {
        List<OrderLineDTO> lines = order.getLines().stream()
                .map(OrderMapper::toLineDTO)
                .toList();

        BigDecimal total = lines.stream()
                .map(OrderLineDTO::lineTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        return new OrderResponseDTO(
                order.getId(),
                order.getOrderType().name(),
                order.getStatus().name(),
                order.getCreatedAt(),
                lines,
                total
        );
    }

    private static OrderLineDTO toLineDTO(OrderLine l) {
        BigDecimal lineTotal = l.getUnitPrice().multiply(BigDecimal.valueOf(l.getQuantity()));
        return new OrderLineDTO(
                l.getMenuItem().getId(),
                l.getMenuItem().getName(),
                l.getQuantity(),
                l.getNote(),
                l.getUnitPrice(),
                lineTotal
        );
    }
}
