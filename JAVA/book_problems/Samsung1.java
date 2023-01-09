package JAVA.book_problems;

import java.util.ArrayList;
import java.util.Scanner;

public class Samsung1 {

  static int result = 0;

  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    int testCase = sc.nextInt();

    for (int i = 0; i < testCase; i++) {
      int row = sc.nextInt();
      int col = sc.nextInt();
      sc.nextLine();

      char[][] map = new char[row][col];

      for (int j = 0; j < row; j++) {
        map[j] = sc.nextLine().toCharArray();
      }

      dfs(0, 0, map, new ArrayList<Character>());

      System.out.println("#" + (i + 1) + " " + result);
      result = 0;
    }
  }

  public static void dfs(int x, int y, char[][] map, ArrayList<Character> haveList) {
    haveList.add(map[x][y]);
    result = Math.max(haveList.size(), result);

    int ROW = map.length;
    int COL = map[0].length;

    int[] dx = {0, -1, 0, 1};
    int[] dy = {1, 0, -1, 0};

    for (int i = 0; i < 4; i++) {
      int nx = x + dx[i];
      int ny = y + dy[i];

      if (0 <= nx && nx < ROW && 0 <= ny && ny < COL && !haveList.contains(map[nx][ny])) {
        dfs(nx, ny, map, new ArrayList<Character>(haveList));
      }
    }
  }
}
