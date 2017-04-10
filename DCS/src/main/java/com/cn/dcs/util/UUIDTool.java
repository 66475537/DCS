package com.cn.dcs.util;
import java.util.UUID;

/**
 * UUID生成
 * @author chenlin
 *
 */
public class UUIDTool {

	public UUIDTool() {
	}
	/**
	 * 自动生成32位的UUid，对应数据库的主键id进行插入用。
	 * @return
	 */
	public static String getUUID() {
		return UUID.randomUUID().toString().replace("-", "");
	}


	public static void main(String[] args) {
//		String[] ss = getUUID(10);
		for (int i = 0; i < 10; i++) {
			System.out.println("ss[" + i + "]=====" + getUUID());
		}
	}
}