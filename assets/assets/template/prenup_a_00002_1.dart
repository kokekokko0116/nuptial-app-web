import 'dart:io';
import 'package:flutter/services.dart';
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;
import 'package:path_provider/path_provider.dart';

//prenup_a_00002_1.dart
class PdfMaker {
  Future<void> generatePdf() async {
    final pdf = pw.Document();

    // フォントの読み込み
    final oohBabyFont = pw.Font.ttf(await rootBundle.load("assets/fonts/OoohBaby-Regular.ttf"));
    final cormorantScFont = pw.Font.ttf(await rootBundle.load("assets/fonts/CormorantSC-Regular.ttf"));

    // 画像の読み込み
    final mainImage = pw.MemoryImage(await _loadImage('assets/images/img_prenup_1.png'));
    final smallImage1 = pw.MemoryImage(await _loadImage('assets/images/img_prenup_2.png'));
    final smallImage2 = pw.MemoryImage(await _loadImage('assets/images/img_prenup_3.png'));
    final smallImage3 = pw.MemoryImage(await _loadImage('assets/images/img_prenup_4.png'));

    pdf.addPage(
      pw.Page(
        pageFormat: PdfPageFormat.a4,
        margin: pw.EdgeInsets.zero,
        build: (pw.Context context) {
          return pw.Container(
            width: 210 * PdfPageFormat.mm,
            height: 297 * PdfPageFormat.mm,
            padding: pw.EdgeInsets.all(10 * PdfPageFormat.mm),
            child: pw.Column(
              mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
              children: [
                pw.Column(
                  children: [
                    pw.Image(mainImage, width: 170 * PdfPageFormat.mm, fit: pw.BoxFit.contain),
                    pw.SizedBox(height: 5 * PdfPageFormat.mm),
                    pw.Row(
                      mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
                      children: [
                        pw.Image(smallImage1, width: 54 * PdfPageFormat.mm, height: 54 * PdfPageFormat.mm, fit: pw.BoxFit.cover),
                        pw.Image(smallImage2, width: 54 * PdfPageFormat.mm, height: 54 * PdfPageFormat.mm, fit: pw.BoxFit.cover),
                        pw.Image(smallImage3, width: 54 * PdfPageFormat.mm, height: 54 * PdfPageFormat.mm, fit: pw.BoxFit.cover),
                      ],
                    ),
                  ],
                ),
                pw.Expanded(child: pw.SizedBox()),
                pw.Column(
                  children: [
                    pw.SizedBox(height: 20 * PdfPageFormat.mm),
                    pw.Text(
                      'Sayumi & David',
                      style: pw.TextStyle(font: oohBabyFont, fontSize: 40),
                    ),
                    pw.Spacer(),
                    pw.Text(
                      'NuptialAgree',
                      style: pw.TextStyle(font: cormorantScFont, fontSize: 16),
                    ),
                  ],
                ),
              ],
            ),
          );
        },
      ),
    );

    // PDFの保存
    final output = await getApplicationDocumentsDirectory();
    final file = File('${output.path}/nuptial_agree.pdf');
    await file.writeAsBytes(await pdf.save());
    print('PDF generated and saved to ${file.path}');
  }

  Future<Uint8List> _loadImage(String assetPath) async {
    return (await rootBundle.load(assetPath)).buffer.asUint8List();
  }
}