package services.horoscope.v1;

import io.grpc.stub.StreamObserver;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import org.json.JSONException;
import org.json.JSONObject;
import services.horoscope.v1.Horoscope.HoroscopeResponse;

public class HoroscopeService extends HoroscopeServiceGrpc.HoroscopeServiceImplBase {

  @Override
  public void getHoroscopeInfo(Horoscope.HoroscopeRequest request,
      StreamObserver<Horoscope.HoroscopeResponse> responseObserver) {
    // Display the request
    System.out.println(request);

    // Construct the protobuf object
    HoroscopeResponse.Builder response = HoroscopeResponse.newBuilder();
    final JSONObject jsonObject;
    try {
      jsonObject = getUserHoroscopeDetails(request.getHoroscopeSign());
    } catch (Exception e) {
      throw new RuntimeException(e);
    }

    try {
      System.out.println(jsonObject);

      response
          .setName(request.getName())
          .setDateRange(jsonObject.getString("date_range"))
          .setCurrentDate(jsonObject.getString("current_date"))
          .setDescription(jsonObject.getString("description"))
          .setCompatibility(jsonObject.getString("compatibility"))
          .setMood(jsonObject.getString("mood"))
          .setColor(jsonObject.getString("color"))
          .setLuckyNumber(Integer.parseInt(jsonObject.getString("lucky_number")))
          .setLuckyTime(jsonObject.getString("lucky_time"));
    } catch (Exception e) {
      throw new RuntimeException(e);
    }

    // Use response observer to send a single response back
    responseObserver.onNext(response.build());

    // End the connection
    responseObserver.onCompleted();
  }

  private JSONObject getUserHoroscopeDetails(String horoscopeSign)
      throws IOException, InterruptedException, JSONException {
    String URL =
        "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" + horoscopeSign + "&day=today";
    HttpRequest httpRequest = HttpRequest.newBuilder()
        .uri(URI.create(URL))
        .header("xxx", "xxx")
        .header("xxx", "xxx")
        .method("POST", HttpRequest.BodyPublishers.noBody())
        .build();
    HttpResponse<String> httpResponse = HttpClient.newHttpClient()
        .send(httpRequest, HttpResponse.BodyHandlers.ofString());

    return new JSONObject(httpResponse.body().toString());
  }
}
