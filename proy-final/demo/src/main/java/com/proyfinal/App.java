package com.proyfinal;
import static spark.Spark.*;

import com.proyfinal.clases.Pyramids;
import com.proyfinal.clases.Pyramid;

import org.json.JSONObject;


 

/**
 * Hello world!
 *
 */
public class App 
{    
    public static void main( String[] args )
    {
         Pyramids pyramids = new Pyramids();


            options("/*",
                    (request, response) -> {

                        String accessControlRequestHeaders = request
                                .headers("Access-Control-Request-Headers");
                        if (accessControlRequestHeaders != null) {
                            response.header("Access-Control-Allow-Headers",
                                    accessControlRequestHeaders);
                        }

                        String accessControlRequestMethod = request
                                .headers("Access-Control-Request-Method");
                        if (accessControlRequestMethod != null) {
                            response.header("Access-Control-Allow-Methods",
                                    accessControlRequestMethod);
                        }

                        return "OK";
                    });

            before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

         post("/PostPyramid", (req, res) -> {
           
            res.type("application/json");
             
           
            Pyramid pyramid = new Pyramid();
            JSONObject body = new JSONObject (req.body());

            String tmpP;
            String tmpS;

            pyramid.setId(pyramids.getPyramids().size() + 1);
             tmpP = body.getString("pyramid");
             tmpS = body.getString("solution");
             
             pyramid.setPyramid(arrayConvert(tmpP));
             pyramid.setSolution(arrayConvert(tmpS));

            pyramids.setPyramids(pyramid);

            JSONObject POSTjson = new JSONObject(pyramids); 
             return POSTjson;
            });

            get("/GetAllPyramid", (req,res)->{
                res.type("application/json");
                JSONObject GETjson = new JSONObject(pyramids); 
                return GETjson;
            });
            get("/GetPyramidById/:id", (req,res)->{
                res.type("application/json");
                String params = req.params(":id");
                Integer id = Integer.parseInt(params);

                JSONObject GETjson = new JSONObject(pyramids.iterable(id)); 
                return GETjson;
            });
        }


        public static String[] arrayConvert(String cadena){
            String[] stringArray = cadena.split(",");
            for(int i =0; i<stringArray.length; i++){

                System.out.println(stringArray[i]);
            }
            return stringArray;
        }
}
