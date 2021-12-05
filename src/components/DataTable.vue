<template>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
            Custom Text Here
        </h3>

      </div>
      <!-- /.card-header -->
      <div class="card-body">
          <div class="row">
              <div class="col-md-8">
                  Other Info Here
              </div>
              <div class="col-md-4">
                  <button class="btn btn-primary pull-right mr-2" @click="$emit('refresh-transactions')">Refresh</button>
                  <button class="btn btn-warning pull-right mr-2" >X Button</button>
                  <button class="btn btn-danger pull-right mr-2" >Y Button</button>
              </div>

          </div>
          <hr>
        <table id="transactions-table" class="table table-bordered table-striped">
          <thead>

          </thead>
          <tbody>
          <tr v-for="t in transactionList" :key="t.name">
            <td><router-link :to="detailUrl+t.name">{{t.name}}</router-link></td>
            <td>{{t.title}}</td>
            <td>{{t.status}}</td>
            <td>{{$formatCurrency(t.grand_total, t.currency)}}</td>
            <td>{{t.modified}}</td>
          </tr>
          </tbody>
          <tfoot>

          </tfoot>
        </table>
      </div>
      <!-- /.card-body -->
    </div>

</template>

<script>
export default {
    name: 'DataTable',
    props: {
        label: {
            type: String
        },
        transactions:{
            type: Array
        },
        detailUrl: {
            type: String
        }
    },
    data(){
          return {
              tableLabel: '',
              transactionList: []
          }
      },
      methods: {
          async setTableData(){
            this.transactionList = [];
            this.transactionList = this.transactions
            // console.log(this.transactionList)
          },
          prepareTransactions(){
              // $('#transactions-table').DataTable().destroy();
              this.setTableData();
              setTimeout(()=>{
                  var printCounter = 0;

                  // Append a caption to the table before the DataTables initialisation
                  // $('#transactions-table').append('<caption style="caption-side: bottom">A fictional company\'s staff table.</caption>');

                  $('#transactions-table').DataTable( {
                      dom: 'Bfrtip',
                      // order: false,
                      order: [[ 4, 'desc' ]],
                      buttons: [
                          'copy',
                          {
                              extend: 'excel',
                              messageTop: 'Copy right'
                          },
                          {
                              extend: 'pdf',
                              messageTop: 'PDF Print Head',
                              messageBottom: 'PDF Print Botton'
                          },
                          {
                              extend: 'print',

                          }
                      ]
                  } );
              }, 2000);
          } // end datatabse
      },
      computed: {

      },
      mounted(){
          this.tableLabel = this.label;
          // setTimeout(()=>{
              // this.prepareTransactions();
          // }, 3000);

      },
      watch: {
          tableLabel: {
                handler(label){
                  // alert(label)
                  document.querySelector('thead').innerHTML = label;
                  document.querySelector('tfoot').innerHTML = label;
              },
              deep: true
          },
          transactions: {
              handler(transactions){
                  // alert('ready')
                  $('#transactions-table').DataTable().destroy();
                  this.setTableData().then(()=>{
                      this.prepareTransactions()
                  })
              }
          }
      }
}
</script>
