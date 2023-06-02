<?php

namespace App\Http\Controllers;

use App\Models\MutualFundsModel;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Reader\Exception;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

class MutualuploadController extends Controller
{

    public function upload()
    {
        return view('mutualuploadview');
    }
// +++++++++++++++++++++++++++++++++++ for import xl sheet ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * @param Request $request
 * @return \Illuminate\Http\RedirectResponse
 * @throws \Illuminate\Validation\ValidationException
 * @throws \PhpOffice\PhpSpreadsheet\Exception
 */
    public function importData(Request $request)
    {
        $this->validate($request, [
            'uploaded_file' => 'required|file|mimes:xls,xlsx,cvc',
        ]);

        $the_file = $request->file('uploaded_file');
        echo "<pre>";
        try {
            $spreadsheet = IOFactory::load($the_file->getRealPath());
            $sheet = $spreadsheet->getActiveSheet();
            $row_limit = $sheet->getHighestDataRow();
            $column_limit = $sheet->getHighestDataColumn();
            $row_range = range(7, $row_limit);
            $column_range = range('F', $column_limit);
            //print_r($column_range);exit;
            $startcount = 7;
            $data = array();
            foreach ($row_range as $row) {
                $schemeName = $sheet->getCell('A' . $row)->getValue();
                if (isset($schemeName) && $schemeName != "") {
                    $data = [
                        'SchemeName' => $sheet->getCell('A' . $row)->getValue(),
                        'Cateogry' => $sheet->getCell('B' . $row)->getValue(),
                        'LatestNAVDate' => date('Y-m-d', strtotime($sheet->getCell('C' . $row)->getValue())),
                        'LatestNAV' => $sheet->getCell('D' . $row)->getValue(),
                        'PreviousNAVDate' => date('Y-m-d', strtotime($sheet->getCell('E' . $row)->getValue())),
                        'PreviousNAV' => $sheet->getCell('F' . $row)->getValue(),
                        'ChangePercentage' => $sheet->getCell('G' . $row)->getValue(),
                    ];
                }
                $startcount++;
                MutualFundsModel::create($data);
            }
            return redirect('/navlist');

        } catch (Exception $e) {
            $error_code = $e->errorInfo[1];
            return back()->withErrors('There was a problem uploading the data!');
        }
        return back()->withSuccess('Great! Data has been successfully uploaded.');
     }

    public function getNav()
    {

        $dataa = MutualFundsModel::all();
        return view("mutualfun_nav", ["data" => $dataa]);
    }

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

}
