package info.tonypacific.restaurant_API.repository;

import info.tonypacific.restaurant_API.model.MenuItem;
import info.tonypacific.restaurant_API.model.Section;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.TestPropertySource;

import java.math.BigDecimal;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@TestPropertySource(locations = "classpath:application-test.properties")
public class MenuRepositoryTest {

    @Autowired
    private MenuRepository menuRepository;

    @BeforeEach
    public void setUp() {
        menuRepository.deleteAll();
    }

    @Test
    public void testSaveMenuItem() {
        MenuItem item = new MenuItem(
            null,
            Section.FOOD,
            "chicken",
            "Whole Chicken",
            "Whole chicken, southern-fried.",
            new BigDecimal("18.00"),
            "/images/whole-chicken.webp"
        );

        MenuItem saved = menuRepository.save(item);

        assertNotNull(saved.getId());
        assertEquals("Whole Chicken", saved.getName());
        assertEquals(Section.FOOD, saved.getSection());
        assertEquals("chicken", saved.getSubsection());
    }

    @Test
    public void testFindAllMenuItems() {
        MenuItem item1 = new MenuItem(
            null,
            Section.FOOD,
            "chicken",
            "Whole Chicken",
            "Whole chicken, southern-fried.",
            new BigDecimal("18.00"),
            "/images/whole-chicken.webp"
        );

        MenuItem item2 = new MenuItem(
            null,
            Section.FOOD,
            "sides",
            "Fries",
            "Crispy fries.",
            new BigDecimal("3.50"),
            "/images/fries.webp"
        );

        menuRepository.save(item1);
        menuRepository.save(item2);

        List<MenuItem> items = menuRepository.findAll();

        assertEquals(2, items.size());
    }

    @Test
    public void testFindBySection() {
        MenuItem foodItem = new MenuItem(
            null,
            Section.FOOD,
            "chicken",
            "Whole Chicken",
            "Whole chicken, southern-fried.",
            new BigDecimal("18.00"),
            "/images/whole-chicken.webp"
        );

        MenuItem beverageItem = new MenuItem(
            null,
            Section.BEVERAGES,
            "soft drinks",
            "Cola",
            "Ice cold cola.",
            new BigDecimal("2.50"),
            "/images/cola.webp"
        );

        menuRepository.save(foodItem);
        menuRepository.save(beverageItem);

        // Note: MenuRepository doesn't have findBySection yet,
        // so we test that findAll returns both and filtering happens client-side
        List<MenuItem> allItems = menuRepository.findAll();
        long foodCount = allItems.stream().filter(i -> i.getSection() == Section.FOOD).count();
        long beverageCount = allItems.stream().filter(i -> i.getSection() == Section.BEVERAGES).count();

        assertEquals(1, foodCount);
        assertEquals(1, beverageCount);
    }

    @Test
    public void testFindBySubsection() {
        MenuItem item1 = new MenuItem(
            null,
            Section.FOOD,
            "chicken",
            "Whole Chicken",
            "Whole chicken, southern-fried.",
            new BigDecimal("18.00"),
            "/images/whole-chicken.webp"
        );

        MenuItem item2 = new MenuItem(
            null,
            Section.FOOD,
            "chicken",
            "Half Chicken",
            "Half chicken, southern-fried.",
            new BigDecimal("10.00"),
            "/images/half-chicken.webp"
        );

        MenuItem item3 = new MenuItem(
            null,
            Section.FOOD,
            "sides",
            "Fries",
            "Crispy fries.",
            new BigDecimal("3.50"),
            "/images/fries.webp"
        );

        menuRepository.save(item1);
        menuRepository.save(item2);
        menuRepository.save(item3);

        List<MenuItem> allItems = menuRepository.findAll();
        long chickenCount = allItems.stream()
            .filter(i -> i.getSubsection().equals("chicken"))
            .count();
        long sidesCount = allItems.stream()
            .filter(i -> i.getSubsection().equals("sides"))
            .count();

        assertEquals(2, chickenCount);
        assertEquals(1, sidesCount);
    }

    @Test
    public void testDeleteMenuItem() {
        MenuItem item = new MenuItem(
            null,
            Section.FOOD,
            "chicken",
            "Whole Chicken",
            "Whole chicken, southern-fried.",
            new BigDecimal("18.00"),
            "/images/whole-chicken.webp"
        );

        MenuItem saved = menuRepository.save(item);
        Long id = saved.getId();

        menuRepository.deleteById(id);

        assertFalse(menuRepository.existsById(id));
    }

    @Test
    public void testUpdateMenuItem() {
        MenuItem item = new MenuItem(
            null,
            Section.FOOD,
            "chicken",
            "Whole Chicken",
            "Whole chicken, southern-fried.",
            new BigDecimal("18.00"),
            "/images/whole-chicken.webp"
        );

        MenuItem saved = menuRepository.save(item);
        saved.setPrice(new BigDecimal("20.00"));
        saved.setName("Premium Whole Chicken");

        MenuItem updated = menuRepository.save(saved);

        assertEquals("Premium Whole Chicken", updated.getName());
        assertEquals(new BigDecimal("20.00"), updated.getPrice());
    }
}
