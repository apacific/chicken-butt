package info.tonypacific.restaurant_API.dto;

import java.util.List;

public record OrderCreateDTO(
        String orderType,  // "DINE_IN" | "CARRY_OUT"
        List<Item> items   // menu item + quantity + note
) {
    public record Item(Long menuItemId, Integer quantity, String note) {}
}
