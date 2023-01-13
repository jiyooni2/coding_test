package concept;

import java.util.Scanner;

public class Implementation1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int N = sc.nextInt();

    sc.nextLine(); // 버퍼 비우기

    String[] moves = sc.nextLine().split(" ");
    int x = 0, y = 0;

    int[] dx = {0, 0, -1, 1};
    int[] dy = {-1, 1, 0, 0};
    char[] moveTypes = {'L', 'R', 'U', 'D'};

    for (int i = 0; i < moves.length; i++) {
      char move = moves[i].charAt(0);
      int nx = 0, ny = 0;

      for (int j = 0; j < 4; j++) {
        if (move == moveTypes[j]) {
          nx = x + dx[j];
          ny = y + dy[j];
        }
      }

      if (0 <= nx && nx < N && 0 <= ny && ny < N) {
        x = nx;
        y = ny;
      }
    }

    System.out.println((x + 1) + " " + (y + 1));
  }
}
