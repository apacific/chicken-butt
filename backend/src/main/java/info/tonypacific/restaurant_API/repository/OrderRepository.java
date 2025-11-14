// repository/OrderRepository.java
package info.tonypacific.restaurant_API.repository;
import info.tonypacific.restaurant_API.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
public interface OrderRepository extends JpaRepository<Order, Long> {}
