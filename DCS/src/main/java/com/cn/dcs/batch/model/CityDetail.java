package com.cn.dcs.batch.model;

import java.io.Serializable;

/**
 * Model class of 城市采集明细.
 * 
 * @author generated by ERMaster
 * @version $Id$
 */
public class CityDetail implements Serializable {

	/** serialVersionUID. */
	private static final long serialVersionUID = 1L;

	/** 采集项ID. */
	private String cdid;

	/** 采集项. */
	private String collection;

	/** 正则表达式. */
	private String expression;

	/**
	 * Constructor.
	 */
	public CityDetail() {
	}

	/**
	 * Set the 采集项ID.
	 * 
	 * @param cdid
	 *            采集项ID
	 */
	public void setCdid(String cdid) {
		this.cdid = cdid;
	}

	/**
	 * Get the 采集项ID.
	 * 
	 * @return 采集项ID
	 */
	public String getCdid() {
		return this.cdid;
	}

	/**
	 * Set the 采集项.
	 * 
	 * @param collection
	 *            采集项
	 */
	public void setCollection(String collection) {
		this.collection = collection;
	}

	/**
	 * Get the 采集项.
	 * 
	 * @return 采集项
	 */
	public String getCollection() {
		return this.collection;
	}

	/**
	 * Set the 正则表达式.
	 * 
	 * @param expression
	 *            正则表达式
	 */
	public void setExpression(String expression) {
		this.expression = expression;
	}

	/**
	 * Get the 正则表达式.
	 * 
	 * @return 正则表达式
	 */
	public String getExpression() {
		return this.expression;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((cdid == null) ? 0 : cdid.hashCode());
		return result;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		CityDetail other = (CityDetail) obj;
		if (cdid == null) {
			if (other.cdid != null) {
				return false;
			}
		} else if (!cdid.equals(other.cdid)) {
			return false;
		}
		return true;
	}

}