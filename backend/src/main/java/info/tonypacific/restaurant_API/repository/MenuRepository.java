// repository/MenuRepository.java
package info.tonypacific.restaurant_API.repository;
import info.tonypacific.restaurant_API.model.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
public interface MenuRepository extends JpaRepository<MenuItem, Long> {}
