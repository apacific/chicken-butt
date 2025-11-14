package info.tonypacific.restaurant_API.controller;

import info.tonypacific.restaurant_API.dto.OrderCreateDTO;
import info.tonypacific.restaurant_API.dto.OrderResponseDTO;
import info.tonypacific.restaurant_API.mapper.OrderMapper;
import info.tonypacific.restaurant_API.model.*;
import info.tonypacific.restaurant_API.repository.MenuRepository;
import info.tonypacific.restaurant_API.repository.OrderRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    private final OrderRepository orderRepository;
    private final MenuRepository menuRepository;

    public OrderController(OrderRepository orderRepository, MenuRepository menuRepository) {
        this.orderRepository = orderRepository;
        this.menuRepository = menuRepository;
    }

    @PostMapping
    @Transactional
    public ResponseEntity<OrderResponseDTO> create(@RequestBody OrderCreateDTO req) {
        OrderType type = OrderType.valueOf(req.orderType());
        Order order = new Order(null, type);

        req.items().forEach(it -> {
            MenuItem menuItem = menuRepository.findById(it.menuItemId())
                    .orElseThrow(() -> new IllegalArgumentException("Menu item not found: " + it.menuItemId()));
            int qty = Math.max(1, it.quantity() == null ? 1 : it.quantity());
            BigDecimal unitPrice = menuItem.getPrice();
            OrderLine line = new OrderLine(null, menuItem, qty, it.note(), unitPrice);
            order.addLine(line);
        });

        Order saved = orderRepository.save(order);
        return ResponseEntity.ok(OrderMapper.toDTO(saved));
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderResponseDTO> get(@PathVariable Long id) {
        return orderRepository.findById(id)
                .map(o -> ResponseEntity.ok(OrderMapper.toDTO(o)))
                .orElse(ResponseEntity.notFound().build());
    }
}
