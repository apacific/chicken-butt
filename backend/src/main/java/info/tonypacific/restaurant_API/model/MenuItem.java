package info.tonypacific.restaurant_API.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "menu_items")
public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Section section;

    @Column(nullable = false)
    private String subsection;

    @Column(nullable = false)
    private String name;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(nullable = false)
    private String imagePath;

    protected MenuItem() {
    }

    public MenuItem(Long id, Section section, String subsection, String name,
                    String description, BigDecimal price, String imagePath) {
        this.id = id;
        this.section = section;
        this.subsection = subsection;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imagePath = imagePath;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Section getSection() { return section; }
    public void setSection(Section section) { this.section = section; }

    public String getSubsection() { return subsection; }
    public void setSubsection(String subsection) { this.subsection = subsection; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }

    public String getImagePath() { return imagePath; }
    public void setImagePath(String imagePath) { this.imagePath = imagePath; }
}
