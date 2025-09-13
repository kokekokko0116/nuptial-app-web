import 'dart:io';
import 'package:flutter/services.dart';
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;
import 'package:path_provider/path_provider.dart';

//prenup_a_00002_2.dart
class PdfMaker {
  Future<void> generatePdf(String partner1Name, String partner2Name, Map<String, List<Map<String, dynamic>>> answersByCategory) async {
    final pdf = pw.Document();

    // フォントの読み込み
    final font = pw.Font.ttf(await rootBundle.load("assets/fonts/KleeOne-Regular.ttf"));
    final fontBold = pw.Font.ttf(await rootBundle.load("assets/fonts/KleeOne-SemiBold.ttf"));

    // 画像の読み込み
    final headerImage = pw.MemoryImage(await _loadImage('assets/images/img_prenup_cover.png'));
    final subImage = pw.MemoryImage(await _loadImage('assets/images/img_our_vows.png'));

    pdf.addPage(
      pw.MultiPage(
        pageFormat: PdfPageFormat.a4,
        margin: pw.EdgeInsets.all(15 * PdfPageFormat.mm),
        build: (pw.Context context) {
          return [
            pw.Image(headerImage, height: 100 * PdfPageFormat.mm, fit: pw.BoxFit.cover),
            pw.SizedBox(height: 8 * PdfPageFormat.mm),
            pw.Center(
              child: pw.Image(subImage, width: 150 * PdfPageFormat.mm, fit: pw.BoxFit.contain),
            ),
            pw.SizedBox(height: 8 * PdfPageFormat.mm),
            pw.Center(
              child: pw.Text(
                '（仮）婚前契約書',
                style: pw.TextStyle(font: font, fontSize: 18),
              ),
            ),
            pw.SizedBox(height: 10 * PdfPageFormat.mm),
            pw.Paragraph(
              text: '　私たち、$partner1Nameと$partner2Nameは、以下の事項について合意しました。',
              style: pw.TextStyle(font: font),
            ),
            pw.SizedBox(height: 5 * PdfPageFormat.mm),
            ...answersByCategory.entries.map((entry) {
              return pw.Column(
                crossAxisAlignment: pw.CrossAxisAlignment.start,
                children: [
                  pw.Text(entry.key, style: pw.TextStyle(font: fontBold, fontSize: 14)),
                  pw.SizedBox(height: 3 * PdfPageFormat.mm),
                  ...entry.value.map((answer) {
                    return pw.Padding(
                      padding: pw.EdgeInsets.only(bottom: 3 * PdfPageFormat.mm),
                      child: pw.RichText(
                        text: pw.TextSpan(
                          children: [
                            pw.TextSpan(text: '${answer["questionText"]}\n', style: pw.TextStyle(font: fontBold)),
                            pw.TextSpan(text: '回答：${answer["freeText"]}${answer["choiceId"]}', style: pw.TextStyle(font: font)),
                          ],
                        ),
                      ),
                    );
                  }).toList(),
                ],
              );
            }).toList(),
            pw.SizedBox(height: 10 * PdfPageFormat.mm),
            pw.Align(
              alignment: pw.Alignment.centerRight,
              child: pw.Text('以上', style: pw.TextStyle(font: font)),
            ),
            pw.SizedBox(height: 15 * PdfPageFormat.mm),
            pw.Align(
              alignment: pw.Alignment.centerRight,
              child: pw.Column(
                crossAxisAlignment: pw.CrossAxisAlignment.end,
                children: [
                  pw.Text('$partner1Name ________________    日付: __________', style: pw.TextStyle(font: font)),
                  pw.SizedBox(height: 5 * PdfPageFormat.mm),
                  pw.Text('$partner2Name ________________    日付: __________', style: pw.TextStyle(font: font)),
                ],
              ),
            ),
          ];
        },
      ),
    );

    // PDFの保存
    final output = await getApplicationDocumentsDirectory();
    final file = File('${output.path}/prenuptial_agreement.pdf');
    await file.writeAsBytes(await pdf.save());
    print('PDF generated and saved to ${file.path}');
  }

  Future<Uint8List> _loadImage(String assetPath) async {
    return (await rootBundle.load(assetPath)).buffer.asUint8List();
  }
}