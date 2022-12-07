package com.proyfinal.clases;
import java.util.ArrayList;

public class Pyramids {
    ArrayList<Pyramid> pyramids = new ArrayList<Pyramid>();

    public ArrayList<Pyramid> getPyramids() {
        return pyramids;
    }

    public void setPyramids(Pyramid pyramid) {
        this.pyramids.add(pyramid);
    }

    public Pyramid iterable (Integer id){
        for (Pyramid pyramid : pyramids) {
            if(id == pyramid.id){
                return pyramid;
            }
        }
        return new Pyramid();
    }
    
}
