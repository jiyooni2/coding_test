package concept;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Bfs1 {
  public static int[][] map = new int[200][200];
  public static int N;
  public static int M;
  static int[] dx = {-1, 1, 0, 0};
  static int[] dy = {0, 0, -1, 1};

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    N = sc.nextInt();
    M = sc.nextInt();
    // 버퍼 지우기
    sc.nextLine();

    for (int i = 0; i < N; i++) {
      String row = sc.nextLine();
      for (int j = 0; j < M; j++) {
        map[i][j] = row.charAt(j) - '0';
      }
    }

    int result = dfs(0, 0);

    System.out.println("result = " + result);
  }

  public static int dfs(int x, int y) {
    Queue<int[]> q = new LinkedList<>();
    int[] tmp = {x, y, 1};
    q.offer(tmp);

    map[x][y] = 2;

    while (!q.isEmpty()) {
      int[] pos = q.poll();
      System.out.println("Arrays.toString(pos) = " + Arrays.toString(pos));

      for (int i = 0; i < 4; i++) {
        int nx = pos[0] + dx[i];
        int ny = pos[1] + dy[i];
        int step = pos[2] + 1;

        if (nx == N - 1 && ny == M - 1) {
          return step;
        }

        if (0 <= nx && nx < N && 0 <= ny && ny < M && map[nx][ny] == 1) {
          int[] tmp2 = {nx, ny, step};
          q.offer(tmp2);
        }
      }
    }
    return -1;
  }
}
