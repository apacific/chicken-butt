package info.tonypacific.restaurant_API.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import info.tonypacific.restaurant_API.repository.MenuRepository;
import info.tonypacific.restaurant_API.model.MenuItem;

@Service
public class MenuService {
    
    @Autowired
    private MenuRepository menuRepository;

    public List<MenuItem> getAllMenuItems() {
        return menuRepository.findAll();
    }

    public MenuItem addMenuItem(MenuItem menuItem) {
        return menuRepository.save(menuItem);
    }
}
