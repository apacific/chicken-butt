package info.tonypacific.restaurant_API.dto;

import java.util.List;

public class OrderDTO {
    private Long id;
    private String customerName;
    private String status;
    private Integer seatNumber;
    private List<Long> menuItemIds;

    public OrderDTO() {
    }

    public OrderDTO(Long id, String customerName, String status, Integer seatNumber, List<Long> menuItemIds) {
        this.id = id;
        this.customerName = customerName;
        this.status = status;
        this.seatNumber = seatNumber;
        this.menuItemIds = menuItemIds;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(Integer seatNumber) {
        this.seatNumber = seatNumber;
    }

    public List<Long> getMenuItemIds() {
        return menuItemIds;
    }

    public void setMenuItemIds(List<Long> menuItemIds) {
        this.menuItemIds = menuItemIds;
    }
}
