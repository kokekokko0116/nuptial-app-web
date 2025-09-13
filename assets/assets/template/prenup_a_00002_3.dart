import 'dart:io';
import 'package:flutter/services.dart';
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;
import 'package:path_provider/path_provider.dart';

//prenup_a_00002_3.dart
class PdfMaker {
  Future<void> generatePdf(String message) async {
    final pdf = pw.Document();

    // フォントの読み込み
    final font = pw.Font.ttf(await rootBundle.load("assets/fonts/KleeOne-Regular.ttf"));
    final fontBold = pw.Font.ttf(await rootBundle.load("assets/fonts/KleeOne-SemiBold.ttf"));

    // 画像の読み込み
    final image = pw.MemoryImage(await _loadImage('assets/images/img_prenup_back.png'));

    pdf.addPage(
      pw.Page(
        pageFormat: PdfPageFormat.a4,
        margin: pw.EdgeInsets.zero,
        build: (pw.Context context) {
          return pw.Container(
            width: 210 * PdfPageFormat.mm,
            height: 297 * PdfPageFormat.mm,
            color: PdfColors.white,
            child: pw.Padding(
              padding: pw.EdgeInsets.all(20 * PdfPageFormat.mm),
              child: pw.Column(
                mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
                children: [
                  pw.Expanded(
                    flex: 45,
                    child: pw.Center(
                      child: pw.Container(
                        width: 150 * PdfPageFormat.mm,
                        child: pw.Text(
                          message,
                          style: pw.TextStyle(font: font, fontSize: 18),
                          textAlign: pw.TextAlign.center,
                        ),
                      ),
                    ),
                  ),
                  pw.Expanded(
                    flex: 55,
                    child: pw.Container(
                      alignment: pw.Alignment.bottomCenter,
                      child: pw.Image(image, fit: pw.BoxFit.fitWidth),
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );

    // PDFの保存
    final output = await getApplicationDocumentsDirectory();
    final file = File('${output.path}/wedding_message.pdf');
    await file.writeAsBytes(await pdf.save());
    print('PDF generated and saved to ${file.path}');
  }

  Future<Uint8List> _loadImage(String assetPath) async {
    return (await rootBundle.load(assetPath)).buffer.asUint8List();
  }
}