package JAVA.book_problems;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Samsung2 {

  static ArrayList<Integer> result;

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int testCase = sc.nextInt();
    sc.nextLine();

    for (int i = 0; i < testCase; i++) {
      result = new ArrayList<>();
      String[] nextLine = sc.nextLine().split(" ");

      int[] N = nextLine[0].chars().map(x -> x - '0').toArray();
      int x = Integer.valueOf(nextLine[1]);
      int y = Integer.valueOf(nextLine[2]);
      Integer[] numbers = {x, y};
      Arrays.sort(numbers, Collections.reverseOrder());

      boolean canInsert = false;
      for (int j = 0; j < N.length; j++) {
        if (canInsert) {
          result.add(numbers[0]);
        } else {
          if (numbers[0] == N[j]) {
            result.add(numbers[0]);
          } else {
            if (numbers[0] < N[j]) {
              result.add(numbers[0]);
              canInsert = true;
            } else if (numbers[1] < N[j] && N[j] < numbers[0]) {
              if (!(j == 0 && numbers[1] == 0)) {
                result.add(numbers[1]);
                canInsert = true;
              }
            } else if (numbers[1] == N[j]) {
              result.add(numbers[1]);
            } else {
              // 지금 상황에서 넣을 수 있는 숫자가 없다!

              for (int k = result.size() - 1; 0 <= k; k--) {
                if (numbers[0] != result.get(k)) {
                  if (!(k == 0 && numbers[1] == 0)) {
                    result.set(k, numbers[1]);
                    canInsert = true;
                  }
                }
              }

              if (!canInsert) {
                // 자릿수 낮추기 or 불가능
                if (result.size() != 0) {
                  result = new ArrayList<>();
                  for (int m = 1; m < N.length; m++) {
                    result.add(numbers[0]);

                    System.out.println(
                        "#"
                            + (i + 1)
                            + " "
                            + result.stream().map(Object::toString).collect(Collectors.joining()));

                    return;
                  }
                }
              }
            }
          }
        }
      }

      if (result.size() == 0) {
        System.out.println("#" + (i + 1) + " " + -1);
      } else {
        System.out.println(
            "#"
                + (i + 1)
                + " "
                + result.stream().map(Object::toString).collect(Collectors.joining()));
      }
    }
  }
}
