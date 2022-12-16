package JAVA.baekjoon.implementation;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Q2477 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int K = sc.nextInt();

    int[][] array = new int[6][2];

    for (int i = 0; i < 6; i++) {
      int direction = sc.nextInt();
      int length = sc.nextInt();
      int[] tmp = {direction, length};
      array[i] = tmp;
    }

    ArrayList<Integer> twice = new ArrayList<Integer>();

    Arrays.stream(array)
        .collect(Collectors.groupingBy(s -> s[0]))
        .forEach(
            (k, v) -> {
              if (v.size() == 2) {
                twice.add(k);
              }
            });

    ArrayList<Integer> longSide = new ArrayList<>();
    ArrayList<Integer> shortSide = new ArrayList<>();

    for (int i = 0; i < 6; i++) {
      if (!twice.contains(array[i][0])) {
        longSide.add(array[i][1]);
      }
    }

    int i = 0;
    while (true) {
      i = (i + 1) % 6;
      if (twice.contains(array[i][0])
          && twice.contains(array[(i + 1) % 6][0])
          && twice.contains(array[(i + 5) % 6][0])) {
        shortSide.add(array[i][1]);
      }
      if (shortSide.size() == 2) {
        break;
      }
    }

    int shortArea = shortSide.get(0) * shortSide.get(1);
    int longArea = longSide.get(0) * longSide.get(1);

    int area = longArea - shortArea;

    System.out.println(area * K);
  }
}
