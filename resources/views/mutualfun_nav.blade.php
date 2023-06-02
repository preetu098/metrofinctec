<!DOCTYPE html>

<html>

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.css" />
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css" />
</head>

<body>
    <div class="container">
        <div class="row justify-content-centre" style="margin-top: 4%">
            <div class="col-md-8">
                <div class="row justify-content-left">
                    <div class="col-md-12">
                        <br />
                        <div class="card">
                            <div class="card-header bgsize-primary-4 sucess card-header">
                                <h4 class="card-title"> Data Table</h4>
                            </div>
                            <div class="card-body">
                                <div class=" card-content table-responsive">
                                    <table id="example" class="table table-striped table-bordered" style="width:100%">
                                        <thead>
                                            <th>ID</th>
                                        <th>Scheme Name</th>
                                        <th>Cateogry</th>
                                        <th>Latest NAV Date</th>
                                        <th>Latest NAV</th>
                                        <th>Previous NAV Date</th>
                                        <th>Previous NAV</th>
                                        <th>Change Percentage</th>

                                        </thead>
                                        <tbody>
                                        @if(!empty($data) && $data->count())
                                            @foreach($data as $row)
                                                {{-- {{dd($row)}} --}}
                                                <tr style="background: rgb(122, 129, 143)">
                                                    <td>{{ $row->id }}</td>
                                                    <td>{{ $row->SchemeName }}</td>
                                                    <td>{{ $row->Cateogry }}</td>
                                                    <td>{{ $row->LatestNAVDate }}</td>
                                                    <td>{{ $row->LatestNAV }}</td>
                                                    <td>{{ $row->PreviousNAVDate }}</td>
                                                    <td>{{ $row->PreviousNAV }}</td>
                                                    <td>{{ $row->ChangePercentage }}</td>
                                                   
                                                </tr>
                                            @endforeach
                                        @else
                                            <tr>
                                                <td colspan="10">There are no data.</td>
                                            </tr>
                                        @endif
                                        </tbody>
                                    </table>
                                    {{-- {!! $data->links() !!} --}}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</body>
</html>
