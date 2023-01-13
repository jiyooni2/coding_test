package JAVA.concept;

import java.util.Scanner;

public class Implementation3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int N = 8;

    int[] dx = {1, -1, 1, -1, 2, 2, -2, -2};
    int[] dy = {-2, -2, 2, 2, 1, -1, 1, -1};

    String location = sc.next();
    // char - char -> int(unicode)
    int x = (int) location.charAt(0) - 'a';
    // char - char -> int(unicode)
    int y = location.charAt(1) - '0' - 1;

    int result = 0;

    for (int i = 0; i < 8; i++) {
      int nx = x + dx[i];
      int ny = y + dy[i];

      if (0 <= nx && nx < N && 0 <= ny && ny < N) {
        result++;
      }
    }

    System.out.println(result);
  }
}
