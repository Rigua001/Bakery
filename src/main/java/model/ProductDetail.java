package model;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class ProductDetail {
	@ManyToOne()
	@JoinColumn(name="order_id")
	private OrderDetail order;
	

}
