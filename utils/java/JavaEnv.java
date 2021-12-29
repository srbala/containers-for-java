// package com.srbala.utils;

public class JavaEnv {
    public static void main(String[] args)
            throws Exception {
        // System.getenv().forEach((k, v) -> {
        //     System.out.println(k + ":" + v);
        // });
        System.getProperties().list(System.out);
    }
}
