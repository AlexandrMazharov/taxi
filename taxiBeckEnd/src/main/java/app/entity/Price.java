package app.entity;

import javax.persistence.*;

@Entity
@Table
public class Price {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long price_id;

    private String price;
    private String title;

    public Price() {
    }

    public Long getPrice_id() {
        return price_id;
    }

    public void setPrice_id(Long price_id) {
        this.price_id = price_id;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
