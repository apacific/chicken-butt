package info.tonypacific.restaurant_API.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "order_lines")
public class OrderLine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "order_id")
    private Order order;                        // parent order

    @ManyToOne(optional = false)
    @JoinColumn(name = "menu_item_id")
    private MenuItem menuItem;                  // selected menu item

    @Column(nullable = false)
    private Integer quantity;

    @Column(length = 1000)
    private String note;

    // snapshot of price at order time
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal unitPrice;

    protected OrderLine() {
    }

    public OrderLine(Long id, MenuItem menuItem, Integer quantity, String note, BigDecimal unitPrice) {
        this.id = id;
        this.menuItem = menuItem;
        this.quantity = quantity;
        this.note = note;
        this.unitPrice = unitPrice;
    }

    // --- Getters / Setters ---

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Order getOrder() { return order; }
    public void setOrder(Order order) { this.order = order; }          // <-- needed by Order.addLine

    public MenuItem getMenuItem() { return menuItem; }
    public void setMenuItem(MenuItem menuItem) { this.menuItem = menuItem; }

    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }

    public String getNote() { return note; }
    public void setNote(String note) { this.note = note; }

    public BigDecimal getUnitPrice() { return unitPrice; }
    public void setUnitPrice(BigDecimal unitPrice) { this.unitPrice = unitPrice; }
}
