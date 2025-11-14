package info.tonypacific.restaurant_API.config;

import info.tonypacific.restaurant_API.model.MenuItem;
import info.tonypacific.restaurant_API.model.Section;
import info.tonypacific.restaurant_API.repository.MenuRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;

@Configuration
public class DataLoader {
    @Bean
    CommandLineRunner seed(MenuRepository repo) {
        return args -> {
            repo.deleteAll();

            repo.save(new MenuItem(null, Section.FOOD, "chicken", "Whole Chicken",
                    "Whole chicken, southern-fried.",
                    new BigDecimal("18.00"), "/images/whole-chicken.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "chicken", "Half Chicken",
                    "Half chicken, southern-fried.",
                    new BigDecimal("10.00"), "/images/half-chicken.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "chicken", "Quarter Chicken",
                    "Chicken leg quarter, southern-fried.",
                    new BigDecimal("7.50"), "/images/quarter-chicken.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "chicken", "Breast",
                    "Bone-in, skin-on, extra crispy, southern classic.",
                    new BigDecimal("5.00"), "/images/breast.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "chicken", "Thigh",
                    "Bone-in, skin-on, extra crispy, southern classic.",
                    new BigDecimal("4.25"), "/images/thigh.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "chicken", "Sandwich",
                    "Crisp, juicy boneless breast, lettuce, pickles, mayo, brioche bun.",
                    new BigDecimal("6.25"), "/images/sandwich.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "chicken", "Wings",
                    "Breaded, southern-fried, one dozen.",
                    new BigDecimal("8.25"), "/images/wings.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "sides", "Shoestring Fries",
                    "Thin-cut Idaho potatoes, crispy, hot, fried to perfection.",
                    new BigDecimal("3.50"), "/images/shoestring-fries.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "sides", "Curly Fries",
                    "Spiral-cut potatoes, extra-seasoned and extra crispy.",
                    new BigDecimal("3.75"), "/images/curly-fries.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "sides", "Onion Rings",
                    "Crispy battered Walla Walla onion rings.",
                    new BigDecimal("4.00"), "/images/onion-rings.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "sides", "Corn on the Cob",
                    "Buttered sweet corn, roasted.",
                    new BigDecimal("3.25"), "/images/corn-on-the-cob.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "sides", "BBQ Beans",
                    "Slow-cooked with pork belly, tangy BBQ sauce, and spices.",
                    new BigDecimal("3.25"), "/images/bbq-beans.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "sides", "Applesauce",
                    "Chilled, pureed fresh ripe local apples.",
                    new BigDecimal("2.50"), "/images/applesauce.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "desserts", "Belgian Waffle",
                    "Crispy edges, fluffy center, dusted with powdered sugar.",
                    new BigDecimal("5.50"), "/images/belgian-waffle.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "desserts", "Soft-Serve",
                    "Vanilla, chocolate, or blackberry.",
                    new BigDecimal("4.00"), "/images/soft-serve.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "desserts", "Chocolate Cake",
                    "Rich, fluffy layers topped with a smooth chocolate ganache.",
                    new BigDecimal("6.00"), "/images/chocolate-cake.webp"));

            repo.save(new MenuItem(null, Section.BEVERAGES, "soft drinks", "Cola",
                    "Ice cold, with or without ice.",
                    new BigDecimal("2.50"), "/images/cola.webp"));

            repo.save(new MenuItem(null, Section.BEVERAGES, "soft drinks", "Diet Cola",
                    "Ice cold, with or without ice.",
                    new BigDecimal("2.50"), "/images/diet-cola.webp"));

            repo.save(new MenuItem(null, Section.BEVERAGES, "iced tea", "Iced Tea",
                    "Black tea, sweet or unsweet, with or without milk/cream.",
                    new BigDecimal("2.50"), "/images/iced-tea.webp"));

            repo.save(new MenuItem(null, Section.BEVERAGES, "iced coffee", "Iced Coffee",
                    "Cold brew, sweet or unsweet, with or without milk/cream.",
                    new BigDecimal("2.50"), "/images/iced-coffee.webp"));

            repo.save(new MenuItem(null, Section.BEVERAGES, "bottled water", "Bottled Water",
                    "Ice cold, still or sparkling.",
                    new BigDecimal("2.50"), "/images/bottled-water.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "extras", "Whipped Butter",
                    "Whipped dairy butter.",
                    new BigDecimal("1.00"), "/images/whipped-butter.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "extras", "Honey Butter",
                    "Whipped dairy butter blended with sweet clover honey.",
                    new BigDecimal("1.50"), "/images/honey-butter.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "extras", "Honey",
                    "Local sweet clover honey.",
                    new BigDecimal("1.00"), "/images/honey.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "extras", "Hot Sauce",
                    "Hot as a firecracker!",
                    new BigDecimal("1.00"), "/images/hot-sauce.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "extras", "Ketchup",
                    "Ketchup, catsup, tomato, toe-mah-toe.",
                    new BigDecimal("1.00"), "/images/ketchup.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "extras", "Ranch Dressing",
                    "Tzatziki-style garden ranch dressing/dip.",
                    new BigDecimal("2.00"), "/images/ranch-dressing.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "extras", "Giblet Gravy",
                    "Our rich homestyle gravy, good enough to eat with a spoon.",
                    new BigDecimal("2.50"), "/images/giblet-gravy.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "extras", "Pickled Veggies",
                    "Giardiniera-style baby cauliflower, okra, green beans, shallot.",
                    new BigDecimal("3.50"), "/images/pickled-veggies.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "extras", "Dill Pickle",
                    "Cucumber pickled in zesty garlic brine.",
                    new BigDecimal("1.50"), "/images/dill-pickle.webp"));

            repo.save(new MenuItem(null, Section.FOOD, "extras", "Toast",
                    "Two slices, lightly toasted - choose white, whole wheat, or rye.",
                    new BigDecimal("1.00"), "/images/toast.webp"));
        };
    }
}
