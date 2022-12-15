package JAVA.concept;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

public class bfs {
    public static boolean[] visited = new boolean[9];
    public static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>();

    public static void main(String[] args) {
        for(int i = 0; i < 9; i++){
            graph.add(new ArrayList<Integer>());
        }

        graph.get(1).addAll(Arrays.asList(2,3,8));
        graph.get(2).addAll(Arrays.asList(1,7));
        graph.get(3).addAll(Arrays.asList(1,4,5));
        graph.get(4).addAll(Arrays.asList(3,5));
        graph.get(5).addAll(Arrays.asList(3,4));
        graph.get(6).add(7);
        graph.get(7).addAll(Arrays.asList(2,6,8));
        graph.get(8).addAll(Arrays.asList(1,7));

        bfsFunction(1);

    }

    public static void bfsFunction(int start){
        Queue<Integer> q = new LinkedList<>();
        //1. 큐에 삽입 및 방문처리 -> 하나의 연산이라고 생각하자
        q.offer(start);
        visited[start]=true;
        //2. 큐가 빌때까지
        while(!q.isEmpty()){
            //큐에서 뽑은 뒤 출력
            int x= q.poll();
            System.out.print(x+" ");
            for(int i:graph.get(x)){
                //3.인접 노드중 방문하지 않은 노드가 있다면 삽입 및 방문처리
                if(!visited[i]){
                    q.offer(i);
                    visited[i]=true;
                }
            }
        }

    }
}


