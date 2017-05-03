package com.cn.dcs.util;

import java.math.BigDecimal;

public class Mercaor {
	private BigDecimal x;
	private BigDecimal y;
	
	
	public Mercaor(BigDecimal x, BigDecimal y) {
		super();
		this.x = x;
		this.y = y;
	}


	public BigDecimal getX() {
		return x;
	}


	public void setX(BigDecimal x) {
		this.x = x;
	}


	public BigDecimal getY() {
		return y;
	}


	public void setY(BigDecimal y) {
		this.y = y;
	}
	
	
}
