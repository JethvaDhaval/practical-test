import "../css/Plan.css";

import React from "react";

export const Plan = () => {
  return (
    <div className="plan card p-5 payment">

      {/* upgrade plan */}
      <h3 className="text-left">Upgrade your plan</h3>
      <h6 className="text-left" style={{ color: "#C7CBCF" }}>
        Please make the payment to start enjoying all the features of our
        premium plan as soon as possible.
        </h6>

      {/* small business change plan */}
      <div className="changePlan bg-light border border-primary rounded mt-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBJTq51pWH1HHjzTxDZPyJu6tT7WaQwsLwQ&usqp=CAU" />
        <div style={{ padding: "5px", float: "left", marginLeft: "10px" }}>
          <h6>Small Business</h6>
          <a href="#" style={{ fontSize: "12px", float: "left" }}>
            CHANGE PLAN
            </a>
        </div>
        <h2 style={{ padding: "5px", float: "right" }}>
          <sup style={{ color: "#C7CBCF" }}>$</sup>
            8,350
            <sub style={{ color: "#C7CBCF", fontSize: "15px" }}>/year</sub>
        </h2>
      </div>


      {/* payment details */}
      <h6 className="text-left mt-5">Payment details</h6>

      <div>
        <img
          className="bg-light float-left"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAzFBMVEUAAADoABr0mxv/XwHnABv/XQDrABr0nRz4nRz7oBz/YgD/WwDvABvwARv8oBzyARsZAQRIAgnBexV6AQ7XiRn7awn9Zgb3iBP2jxiycRT7dgz4TgrhARnBARY3IwZ1AA2mARO2ARTLABZOAQokAQYhFgVQMwqEVA/NghcfAQSDAQ81AQYuHwbqlRopGwayARVeAQtYOQslGAZaAwx4TQ9rRAyZAhHcUA70PQ+ZYRLuJRaLARARCgaSWxJAAQjwMhL5fxArAQVHLAqkaRTdhdN8AAAEMElEQVR4nO3bXVvaSByHYUgCTSQEpNitayKQWkFoKG61W8W1y/r9v9MmICAQmD+07lzTfe4DjnLA/K55fykUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP+R+nGr3YniOI467f6Hi9xvPl52Txu9ZrPZa5x2Lz/+x//wlV29jcKaX04Vsx+/Fsb9wdo3n7q9JAjcZ4EXJL3uUMu/fQ3Hn51qWvoVZb8YjV58c92zAtda5XpW41Lbv/6ZjqPaWvnnMdTieQrXzY0AnmMImuanUG/7+QlMU6hGWYsYNrz8BGYpNP7QXYgf8yX0tyYwTcHpF26s7QlkPOtWdzF+xNfazgQy/p/Bm50RpIJT3QU5XKeqjKB4Zp+46hB6uotyqEgZgVM8O7JL7yxlCF5Td2EOE+3uCuYR2HbpSBVBWhOMDOGzMoLiLII0hBN1CF5Dd4H211d3h863WQS2Xfld2Rqs4E53kfb1KOgO7+cRpCH8JgjhWneh9hRvnxktVOwXds8RMm6iu1D7Gas7g2VL+DVbQ90RtAR7Rem9OgTXpHXkV0E1ODtazeBEkIFJ80V1NXDK9prKe2UGb7wH3SUT6+/bG0wrgqBH8MzpEQSDglNZrwd2SdAYjJktPioTWJkbLBuDIARTdlTequdHzreNCESNIfhLd+GEOsqm4DhnORm8E9QDUxbRsboaFEs5GdjqkcFNzBgZLgQLxvvNCGQdQvBJd/FEHgUrxpwuMVs4KSMwZeE0EnSJ33Mz+FswQ7jRXTyR1iEzJOnA4JkxMBw0SxRn8KS7eCJkkE6RXjUDM1YMB/eJJUmf2NVdPJHjw8cFZQSmjI0TyXZqTgSyOdK57uLJhOoMyjlzZdtWZ2DKXLkQqddMxc3tg+zMTcmYDQTRpvJhw4JrxtBYKHwQnC3k7aEIzlk8M7rEVCjYS8vpEgVNwZxjFsnW+uae6q+1uT6R7CCsZyBaOf+ju2hy6t207ALK/tXAlJ20zKOgMaxVBNHJsym7ylNtQa+4ctgmuYbhmnUN40o9V1w9bZPMky0z9hIXWvstnCTbaIEZS8YXBNeRlq1BdCHJpA7xmfLQ0VncRJFcTDNoerQ0EcwWZ0vokuT+RWLIonnVQBhCSdAfupZBs6OXJooL21l7uK/Itg2MrAWZi1gdQlUQQdA0bFRc0d7yfmOh1qmfbnm/sagEJl9bz3wJd00U/LCVfnObBLsqQWL084WpsbOtQfjFdn36ycOTte0Rg2eZcaCgcDUOq5stolwttyeLb4ZPbk6LcAPrzvCHPEujTlj250/bssd9vhO11r65aVjZ077pw57Z676kYcYhs9ho3IlDJ03CCeNoPKrnfPJwe9drJlZWI5Jm7878biBPfTIYDCZ5xV96GJ6fnw8NOUUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxs/wKkEVjAkRZpNwAAAABJRU5ErkJggg=="
        />
        <div style={{ padding: "5px", float: "left", marginLeft: "10px" }}>
          <h6 className="text-left">Credit card</h6>
          <h6 className="text-left" style={{ color: "#C7CBCF" }}>
            2435 xxxx xxxx 8880
            </h6>

        </div>
        <div className="float-right">
          <input
            type="text"
            className="float-right border border-secondary form-control m-2 w-50"
            placeholder="CVC"
          />
        </div>
      </div>

      <div>
        <img
          className="bg-light float-left"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAzFBMVEUAAADoABr0mxv/XwHnABv/XQDrABr0nRz4nRz7oBz/YgD/WwDvABvwARv8oBzyARsZAQRIAgnBexV6AQ7XiRn7awn9Zgb3iBP2jxiycRT7dgz4TgrhARnBARY3IwZ1AA2mARO2ARTLABZOAQokAQYhFgVQMwqEVA/NghcfAQSDAQ81AQYuHwbqlRopGwayARVeAQtYOQslGAZaAwx4TQ9rRAyZAhHcUA70PQ+ZYRLuJRaLARARCgaSWxJAAQjwMhL5fxArAQVHLAqkaRTdhdN8AAAEMElEQVR4nO3bXVvaSByHYUgCTSQEpNitayKQWkFoKG61W8W1y/r9v9MmICAQmD+07lzTfe4DjnLA/K55fykUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP+R+nGr3YniOI467f6Hi9xvPl52Txu9ZrPZa5x2Lz/+x//wlV29jcKaX04Vsx+/Fsb9wdo3n7q9JAjcZ4EXJL3uUMu/fQ3Hn51qWvoVZb8YjV58c92zAtda5XpW41Lbv/6ZjqPaWvnnMdTieQrXzY0AnmMImuanUG/7+QlMU6hGWYsYNrz8BGYpNP7QXYgf8yX0tyYwTcHpF26s7QlkPOtWdzF+xNfazgQy/p/Bm50RpIJT3QU5XKeqjKB4Zp+46hB6uotyqEgZgVM8O7JL7yxlCF5Td2EOE+3uCuYR2HbpSBVBWhOMDOGzMoLiLII0hBN1CF5Dd4H211d3h863WQS2Xfld2Rqs4E53kfb1KOgO7+cRpCH8JgjhWneh9hRvnxktVOwXds8RMm6iu1D7Gas7g2VL+DVbQ90RtAR7Rem9OgTXpHXkV0E1ODtazeBEkIFJ80V1NXDK9prKe2UGb7wH3SUT6+/bG0wrgqBH8MzpEQSDglNZrwd2SdAYjJktPioTWJkbLBuDIARTdlTequdHzreNCESNIfhLd+GEOsqm4DhnORm8E9QDUxbRsboaFEs5GdjqkcFNzBgZLgQLxvvNCGQdQvBJd/FEHgUrxpwuMVs4KSMwZeE0EnSJ33Mz+FswQ7jRXTyR1iEzJOnA4JkxMBw0SxRn8KS7eCJkkE6RXjUDM1YMB/eJJUmf2NVdPJHjw8cFZQSmjI0TyXZqTgSyOdK57uLJhOoMyjlzZdtWZ2DKXLkQqddMxc3tg+zMTcmYDQTRpvJhw4JrxtBYKHwQnC3k7aEIzlk8M7rEVCjYS8vpEgVNwZxjFsnW+uae6q+1uT6R7CCsZyBaOf+ju2hy6t207ALK/tXAlJ20zKOgMaxVBNHJsym7ylNtQa+4ctgmuYbhmnUN40o9V1w9bZPMky0z9hIXWvstnCTbaIEZS8YXBNeRlq1BdCHJpA7xmfLQ0VncRJFcTDNoerQ0EcwWZ0vokuT+RWLIonnVQBhCSdAfupZBs6OXJooL21l7uK/Itg2MrAWZi1gdQlUQQdA0bFRc0d7yfmOh1qmfbnm/sagEJl9bz3wJd00U/LCVfnObBLsqQWL084WpsbOtQfjFdn36ycOTte0Rg2eZcaCgcDUOq5stolwttyeLb4ZPbk6LcAPrzvCHPEujTlj250/bssd9vhO11r65aVjZ077pw57Z676kYcYhs9ho3IlDJ03CCeNoPKrnfPJwe9drJlZWI5Jm7878biBPfTIYDCZ5xV96GJ6fnw8NOUUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxs/wKkEVjAkRZpNwAAAABJRU5ErkJggg=="
        />
        <div style={{ padding: "5px", float: "left", marginLeft: "10px" }}>
          <h6 className="text-left">Credit card</h6>
          <h6 className="text-left" style={{ color: "#C7CBCF" }}>
            2435 xxxx xxxx 8880
            </h6>

        </div>
        <div className="float-right">
          <input
            type="text"
            className="float-right border border-secondary form-control m-2 w-50"
            placeholder="CVC"
          />
        </div>
      </div>

      {/* add payment method */}
      <div className="mt-3">
        <h6 className="text-primary float-left mb-4">ADD PAYMENT METHOD</h6>

        <input
          type="email"
          className="form-control mt-1 mb-4 pt-4 pb-4"
          placeholder="Email address"
        />

        <button type="button" className="btn btn-primary p-3">
          Proceed to payment
          </button>
      </div>
    </div>
  );
};
