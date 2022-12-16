package JAVA.baekjoon.implementation;

import java.util.Iterator;
import java.util.Scanner;
import java.util.Stack;

public class Q10773 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int K = sc.nextInt();

    Stack<Integer> stack = new Stack<>();

    for (int i = 0; i < K; i++) {
      int next = sc.nextInt();
      if (next != 0) {
        stack.push(next);
      } else {
        stack.pop();
      }
    }

    int result = 0;

    Iterator iterator = stack.iterator();

    while (iterator.hasNext()) {
      result += (Integer) iterator.next();
    }

    System.out.println(result);
  }
}
