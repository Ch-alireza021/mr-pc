import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import QuestionComponent from "./styleQuestionComponent";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

const CommonQuestions = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingX: "20px",
        paddingY: "50px",
      }}
    >
      <Box
        sx={{
          maxWidth: "860px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h4">پرسش‌های متداول</Typography>
        <Typography>
          در این بخش می‌توانید جواب پرسش‌های خود را در زمینه نحوه ثبت سفارش،
          ارسال کالا و شیوه‌های پرداخت، پیدا کنید. چنانچه جواب پرسش شما در این
          قسمت پیدا نشد. در قسمت ارتباط با ما می‌توانید پیام بگذارید تا
          کارشناسان فروش ما جوابگوی شما باشند.
        </Typography>
        <Box>
          <QuestionComponent text="شیوه‌ی ثبت سفارش">
            <Typography variant="h6" fontWeight={"900"}>
              چگونه از مستر پی سی خرید کنیم؟
            </Typography>
            <Typography paddingLeft={"15px"} paddingY={"5px"}>
              برای ثبت سفارش در مستر پی سی، کافی است کالای مورد نظر را به سبد خرید خود
              اضافه کنید. سپس باید به بخش تسویه حساب رفته و با وارد کردن دقیق
              مشخصات شخصی و انتخاب یکی از شیوه‌های حمل و نقل و پرداخت، سفارش خود
              را ثبت کنید.
            </Typography>

            <Typography variant="h6" fontWeight={"900"}>
              آیا می‌توانم به شکل حضوری از مستر پی سی خرید کنم؟
            </Typography>
            <Typography paddingY={"5px"}>
              برای مشتریانی که ساکن تهران هستند، امکان خرید حضوری از طریق مراجعه
              به "فروشگاه مستر پی سی" میسر است.
            </Typography>
          </QuestionComponent>

          <QuestionComponent text=" شیوه ارسال کالا ">
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography>
                <strong>ارسال از طریق پیک ویژه فروشگاه: </strong>پیک ویژه
                فروشگاه مستر پی سی شامل زبده‌ترین و ماهرترین نیروهای بخش ارسال کالا
                است که تلاش می‌کنند در سریع‌ترین زمان ممکن کالا را درب منزل
                تقدیم مشتریان عزیز کنند. ارسال از طریق پیک مستر پی سی، تنها برای
                مشتریان ساکن در شهر تهران امکان پذیر است و معمولا یک روز کاری پس
                از ثبت سفارش صورت می‌گیرد.{" "}
              </Typography>
              <Typography>
                <strong>ارسال از طریق پست پیشتاز: </strong> شیوه دوم ارسال کالا
                در فروشگاه مستر پی سی، ارسال از طریق پست پیشتاز است که تحت نظر اداره
                مرکزی پست، سفارشات برای مشتریان در سرتاسر کشور ارسال شده و حدود
                چهار تا هفت روز کاری پس از ثبت سفارش، درب منزل تقدیم مشتریان
                می‌گردد.
              </Typography>
              <Typography>
                <strong> ارسال از طریق تیپاکس: </strong> شیوه سوم ارسال کالا در
                فروشگاه مستر پی سی، ارسال از طریق شرکت تیپاکس است که سال‌هاست به شرکتی
                نامدار و مطمئن در زمینه ارسال کالا تبدیل شده است. مزیت تیپاکس در
                ارسال بسیار سریع‌ کالا است، به طوری که پس از طی شدن فرآیند
                پردازش و تامین کالا و بسته بندی آن، طی 24 تا 48 ساعت مرسوله بدست
                مشتریان گرامی می‌رسد.
              </Typography>
              <Typography>
                <strong>تحویل حضوری کالا: </strong>
                اگر شما ساکن شهر تهران هستید، می‌توانید در بخش نوع ارسال، دریافت
                حضوری را انتخاب کرده و پس از تماسِ کارشناسان بخش لاجستیک مستر پی سی،
                برای دریافت به
                <Box component={"span"} color="green">
                  "فروشگاه مستر پی سی "
                </Box>
                مراجعه نمایید.
              </Typography>
            </Box>
          </QuestionComponent>

          <QuestionComponent text="  شیوه‌ پرداخت">
            <Typography>
              فروشگاه مستر پی سی نهایت تلاش خود را می‌کند تا مشتریان بتوانند براحتی
              سفارشات خود را براساس شیوه مدنظر خود پرداخت کنند. به طور کلی
              شیوه‌های پرداخت سفارش در فروشگاه مستر پی سی به شرح زیر می‌باشد:
            </Typography>
            <List>
              <ListItem>1. پرداخت از طریق درگاه امن بانک سامان</ListItem>
              <ListItem>
                2. پرداخت به شکل حضوری با مراجعه به فروشگاه مستر پی سی گیم
              </ListItem>
              <ListItem>
                3. پرداخت درب محل در شهر تهران (برای سفارشاتی با ارزش کمتر 20
                میلیون تومان)
              </ListItem>
            </List>
          </QuestionComponent>
        </Box>
      </Box>
    </Box>
  );
};

export default CommonQuestions;
