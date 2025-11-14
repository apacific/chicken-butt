package info.tonypacific.restaurant_API.model;

import jakarta.persistence.*;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private OrderType orderType; // DINE_IN or CARRY_OUT

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private OrderStatus status = OrderStatus.PENDING;

    @Column(nullable = false)
    private OffsetDateTime createdAt = OffsetDateTime.now();

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderLine> lines = new ArrayList<>();

    protected Order() {
    }

    public Order(Long id, OrderType orderType) {
        this.id = id;
        this.orderType = orderType;
    }

    // helper to maintain both sides of the relationship
    public void addLine(OrderLine line) {
        line.setOrder(this);   // <-- requires setOrder in OrderLine
        this.lines.add(line);
    }

    public void removeLine(OrderLine line) {
        line.setOrder(null);
        this.lines.remove(line);
    }

    // --- Getters / Setters ---

    public Long getId() { return id; }                                // <-- used by mapper
    public void setId(Long id) { this.id = id; }

    public OrderType getOrderType() { return orderType; }
    public void setOrderType(OrderType orderType) { this.orderType = orderType; }

    public OrderStatus getStatus() { return status; }                  // <-- used by mapper
    public void setStatus(OrderStatus status) { this.status = status; }

    public OffsetDateTime getCreatedAt() { return createdAt; }         // <-- used by mapper
    public void setCreatedAt(OffsetDateTime createdAt) { this.createdAt = createdAt; }

    public List<OrderLine> getLines() { return lines; }                // <-- used by mapper
    public void setLines(List<OrderLine> lines) { this.lines = lines; }
}
